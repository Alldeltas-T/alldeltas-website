import React, { useState, useEffect } from 'react'
import { Share2, Mail, Check, X } from 'lucide-react'

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState('')

  useEffect(() => {
    setShareUrl(window.location.href)
  }, [])

  const shareTitle = 'Alldeltas Consulting - Your Partner in Railway Safety'

  const shareLinks = [
    { name: 'Email', icon: Mail, url: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`, color: '#EA4335' },
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.share-dropdown')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className="fixed left-6 bottom-5 z-40 share-dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-[#1E4A76] text-white shadow-lg hover:bg-[#2A5F8A] transition-all duration-300 flex items-center justify-center group"
        aria-label="Share"
      >
        <Share2 size={20} className="group-hover:scale-110 transition-transform" />
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 bg-[var(--bg-card)] rounded-xl shadow-xl border border-[var(--border-light)] p-2 min-w-[140px] animate-fadeInUp">
          <div className="space-y-1">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <link.icon size={18} style={{ color: link.color }} />
                <span className="text-sm text-[var(--text-primary)]">{link.name}</span>
              </a>
            ))}
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors w-full"
            >
              {copied ? <Check size={18} className="text-green-500" /> : <X size={18} className="text-gray-500" />}
              <span className="text-sm text-[var(--text-primary)]">{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShareButton