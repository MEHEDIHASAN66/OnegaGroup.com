import { useState, useEffect } from 'react'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-amber-600 hover:bg-amber-500/10 transition"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
          <path d="M12 2v4m0 12v4M4.22 4.22l2.83 2.83m4 8l2.83 2.83M2 12h4m12 0h4m-4.22-7.78l2.83-2.83m4 8l2.83 2.83" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
