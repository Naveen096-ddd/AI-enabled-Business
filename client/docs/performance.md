# Performance Notes

Virtualization was introduced after tables became slow (~8k rows).
Memoization is applied only where profiling showed re-renders.
