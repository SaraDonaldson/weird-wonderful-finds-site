import { Copy, XIcon } from 'lucide-react'
import React, { useState } from 'react'

interface SharePopoverProps{
    postId: string
}

function SharePopover({postId}:SharePopoverProps) {
    const [copied, setCopied] = useState<boolean>(false);

    async function copyLink() {
        await navigator.clipboard.writeText(`/feed/post-${postId}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
  }

  return (
        <div
          className="w-full bg-white dark:bg-black rounded-lg shadow-lg
                     transform origin-top-right animate-share-pop"
            >

          <div className="p-2">
            <button
            //   onClick={() => setMenuOpen(false)}
              className="absolute top-1 right-1 text-gray-500 dark:text-gray-300 
                         hover:text-gray-700 dark:hover:text-gray-100 p-1 rounded"
              aria-label="Close share menu"
            >
              <XIcon className="h-4 w-4" />
            </button>

            <h3 className="text-sm font-medium text-gray-900 dark:text-dark-text mb-2">
              Share this post
            </h3>

            {/* Copy Link */}
            <button
              onClick={copyLink}
              className="flex items-center w-full px-2 py-1 mb-2 
                         text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 
                         rounded transition-colors duration-150"
            >
              <Copy className="h-5 w-5 mr-2" />
              <span className="text-sm">
                {copied ? 'Copied!' : 'Copy Link'}
              </span>
            </button>

            {/* Social Share Buttons */}
            <div className="flex space-x-2">
              {/* Example: Twitter */}
              <a
                // href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                // //   urlToShare
                // )}`}
                href='#'
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-2 py-1 
                           bg-[#1DA1F2] text-white rounded hover:bg-[#0d95e8] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 19c11 0 16.9-9.2 16.9-16.9 0-.3 0-.5 0-.8A12 12 0 0029 2.6a12 12 0 01-3.4 0.9 6 6 0 002.6-3.2 12 12 0 01-3.8 1.5 6 6 0 00-10.4 5.5A17 17 0 013 3.9a6 6 0 001.9 8.1 6 6 0 01-2.7-.7v.1A6 6 0 006 14a6 6 0 01-2.7.1 6 6 0 005.6 4.2A12 12 0 012 19a17 17 0 009 2.6" />
                </svg>
              </a>
              {/* Example: Facebook */}
              <a
                // href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                // //   urlToShare
                // )}`}
                href='#'
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-2 py-1 
                           bg-[#1877F2] text-white rounded hover:bg-[#166FE5] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9c0-2.4 1.4-3.7 3.5-3.7 1 0 2 .1 2 .1v2.3h-1.1c-1.1 0-1.5.7-1.5 1.5v1.8H17l-.3 3h-2.2v7A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
  )
}

export default SharePopover