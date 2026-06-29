export const QUERY_KEYS = {
  AUTH: {
    ME: ["auth", "me"] as const,
  },

  RESUME: {
    LIST: ["resume"] as const,
    DETAIL: (id: string) => ["resume", id] as const,
  },

  TEMPLATE: {
    LIST: ["templates"] as const,
  },
} as const;
