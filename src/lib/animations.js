export const ease = [0.22, 1, 0.36, 1]

// custom = delay (seconds). Isse cards ek ke baad ek aate hain
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay },
  }),
}