import React, { useState } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

/**
 * Compact Apple-style Resume CTA Button
 * Sized with matching height and width to pair symmetrically with the "Open to Work" pill.
 * Automatically downloads Manoj Bhatt's Resume PDF directly to the user's system upon click.
 */
export default function ResumeButton({ className = '' }) {
  const { resume } = PORTFOLIO_CONFIG;
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();
    if (downloading) return;
    setDownloading(true);

    const filename = resume.filename || 'Manoj_Bhatt_Resume.pdf';
    try {
      // Fetch as blob to guarantee direct binary download across all modern browsers
      const response = await fetch(resume.url);
      if (!response.ok) throw new Error('Network response failed');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback: direct programmatic anchor download
      const fallbackLink = document.createElement('a');
      fallbackLink.href = resume.url;
      fallbackLink.download = filename;
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  return (
    <a
      href={resume.url}
      download={resume.filename || "Manoj_Bhatt_Resume.pdf"}
      onClick={handleDownload}
      aria-label={resume.buttonAriaLabel}
      title="Download Manoj Bhatt's Resume (PDF)"
      className={`group relative inline-flex items-center justify-between w-auto sm:w-[168px] h-[36px] sm:h-[42px] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/90 hover:bg-black hover:text-white backdrop-blur-md border border-black/[0.08] hover:border-black shadow-2xs transition-all duration-300 ease-out hover:scale-102 active:scale-95 text-[11.5px] sm:text-[13px] font-semibold text-[#1d1d1f] select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 cursor-pointer ${className}`}
    >
      <div className="flex items-center gap-1.5 sm:gap-2">
        <div className="w-6 h-6 sm:w-7.5 sm:h-7.5 rounded-full overflow-hidden bg-black/[0.04] group-hover:bg-white/10 flex items-center justify-center transition-colors flex-shrink-0">
          <FileText size={12} className="sm:w-[13px] sm:h-[13px] text-[#86868b] group-hover:text-white transition-colors" />
        </div>
        <span className="tracking-tight">{downloading ? 'Downloading...' : resume.buttonLabel}</span>
      </div>

      <ArrowUpRight 
        size={13} 
        className="sm:w-[14px] sm:h-[14px] text-[#86868b] group-hover:text-white transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 ml-1.5 sm:ml-0" 
      />
    </a>
  );
}
