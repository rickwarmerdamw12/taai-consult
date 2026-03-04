import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

// Fetches all SeoOverride records once and caches them
// Returns the override for the current path, or null if none exists
export function useSeoOverride(path) {
  const { data: overrides = [] } = useQuery({
    queryKey: ['seo-overrides'],
    queryFn: () => base44.entities.SeoOverride.list(),
    staleTime: 1000 * 60 * 10, // 10 minutes cache
  });

  // Case-sensitive exact match, ignore query parameters
  const cleanPath = path.split('?')[0];
  return overrides.find(o => o.path === cleanPath) || null;
}