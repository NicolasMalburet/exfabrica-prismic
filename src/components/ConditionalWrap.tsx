/**
 * Adds a wrapper around children if a condition is true.
 */
export function ConditionalWrap({ condition, wrap: Wrap, children }: any) {
  return condition ? <Wrap>{children}</Wrap> : children;
}
