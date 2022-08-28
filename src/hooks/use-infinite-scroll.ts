import { useRef, useCallback } from 'react';

export const useInfiniteScroll = (
  loading: boolean,
  hasMore: boolean,
  loadMore: () => void,
  options?: IntersectionObserverInit
) => {
  const observer = useRef<IntersectionObserver>();
  const ref = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(
        (entries) => {
          const [target] = entries;
          if (target.isIntersecting && hasMore) {
            loadMore();
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
          ...options,
        }
      );

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return {
    ref,
  };
};
