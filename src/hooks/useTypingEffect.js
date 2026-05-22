import { useEffect, useState } from 'react'

export function useTypingEffect(texts, speed = 80, pause = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), speed)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), speed / 2)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setTextIndex(i => (i + 1) % texts.length)
    }

    setDisplayText(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex, texts, speed, pause])

  return displayText
}
