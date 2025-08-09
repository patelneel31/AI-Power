import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    const { userId, has } = await req.auth();

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const hasPremiumPlan = await has({ plan: "premium" });
    const user = await clerkClient.users.getUser(userId);

    req.plan = hasPremiumPlan ? "premium" : "free";

    if (!hasPremiumPlan) {
      req.free_usage = user.privateMetadata?.free_usage ?? 0;

      // Initialize free_usage = 0 in Clerk if it doesn't exist
      if (user.privateMetadata?.free_usage === undefined) {
        await clerkClient.users.updateUserMetadata(userId, {
          privateMetadata: { free_usage: 0 },
        });
        req.free_usage = 0;
      }
    } else {
      req.free_usage = 0;

      // Optional: reset free_usage for premium users
      if (user.privateMetadata?.free_usage) {
        await clerkClient.users.updateUserMetadata(userId, {
          privateMetadata: { free_usage: 0 },
        });
      }
    }

    req.userId = userId;

    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "Authentication failed" });
  }
};
