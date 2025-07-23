"use client";
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getTemplateById } from '@/data/templates';
import HtmlEditor from '@/components/HtmlEditor';
import Link from 'next/link';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { LuPencilLine } from 'react-icons/lu';
import {FaPalette } from 'react-icons/fa';
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from 'react-icons/fa';

export default function EditorPage() {
  const params = useParams();
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [template, setTemplate] = useState<any>(null);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [formattingState, setFormattingState] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    alignLeft: false,
    alignCenter: false,
    alignRight: false,
    alignJustify: false
  });
  const [textColor, setTextColor] = useState(template?.defaultColors?.text || "#000000");
  const [isExportingImage, setIsExportingImage] = useState(false);
  const [isExportingPDF, setIsExportingPDF] = useState(false);

  useEffect(() => {
    const templateId = params.id as string;
    const foundTemplate = getTemplateById(templateId);
    
    if (foundTemplate) {
      setTemplate(foundTemplate);
      setHtmlContent(foundTemplate.htmlContent);
    } else {
      // Template not found, redirect to templates page
      router.push('/templates');
    }
    
    setIsLoading(false);
  }, [params.id, router]);

  const handleContentChange = (newContent: string) => {
    setHtmlContent(newContent);
  };

  const handleFormattingChange = (newState: any) => {
    setFormattingState(newState);
  };

  const applyFormatting = (command: string, value?: string) => {
    if (typeof window !== 'undefined' && (window as any).applyFormatting) {
      (window as any).applyFormatting(command, value);
    }
  };

  const applyAlignment = (alignment: string) => {
    if (typeof window !== 'undefined' && (window as any).applyAlignment) {
      (window as any).applyAlignment(alignment);
    }
  };

  const applyFontSize = (size: string) => {
    if (typeof window !== 'undefined' && (window as any).applyFontSize) {
      (window as any).applyFontSize(size);
    }
  };

  const applyFontFamily = (fontFamily: string) => {
    if (typeof window !== 'undefined' && (window as any).applyFontFamily) {
      (window as any).applyFontFamily(fontFamily);
    }
  };

  const applyTextColor = (color: string) => {
    setTextColor(color);
    if (typeof window !== 'undefined' && (window as any).applyTextColor) {
      (window as any).applyTextColor(color);
    }
  };

  const applyBackgroundColor = (color: string) => {
    if (typeof window !== 'undefined' && (window as any).applyBackgroundColor) {
      (window as any).applyBackgroundColor(color);
    }
  };

  const exportAsImage = async () => {
    if (!cardRef.current || isExportingImage || isExportingPDF) return;
    setIsExportingImage(true);
    try {
      // Get the actual card element inside the container
      const cardElement = cardRef.current.querySelector('.template-preview-inline') as HTMLElement;
      if (!cardElement) {
        throw new Error('Card element not found');
      }

      // Create a temporary container with the exact card dimensions
      const tempContainer = document.createElement('div');
      tempContainer.style.width = '400px';
      tempContainer.style.height = '600px';
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.overflow = 'hidden';
      tempContainer.style.backgroundColor = '#ffffff';
      tempContainer.className = 'export-container exporting';
      
      // Clone the card content
      const clonedCard = cardElement.cloneNode(true) as HTMLElement;
      clonedCard.style.width = '400px';
      clonedCard.style.height = '600px';
      clonedCard.style.margin = '0';
      clonedCard.style.padding = '0';
      tempContainer.appendChild(clonedCard);
      document.body.appendChild(tempContainer);

      const canvas = await html2canvas(tempContainer, {
        scale: 3, // Ultra high resolution
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 400,
        height: 600,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 400,
        windowHeight: 600
      });
      
      // Clean up
      document.body.removeChild(tempContainer);
      
      const link = document.createElement('a');
      link.download = `${template.name}-invitation.jpg`;
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    } catch (error) {
      console.error('Error exporting as image:', error);
      alert('Failed to export image. Please try again.');
    } finally {
      setIsExportingImage(false);
    }
  };

  const exportAsPDF = async () => {
    if (!cardRef.current || isExportingImage || isExportingPDF) return;
    setIsExportingPDF(true);
    try {
      // Get the actual card element inside the container
      const cardElement = cardRef.current.querySelector('.template-preview-inline') as HTMLElement;
      if (!cardElement) {
        throw new Error('Card element not found');
      }

      // Create a temporary container with the exact card dimensions
      const tempContainer = document.createElement('div');
      tempContainer.style.width = '400px';
      tempContainer.style.height = '600px';
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.overflow = 'hidden';
      tempContainer.style.backgroundColor = '#ffffff';
      tempContainer.className = 'export-container exporting';
      
      // Clone the card content
      const clonedCard = cardElement.cloneNode(true) as HTMLElement;
      clonedCard.style.width = '400px';
      clonedCard.style.height = '600px';
      clonedCard.style.margin = '0';
      clonedCard.style.padding = '0';
      tempContainer.appendChild(clonedCard);
      document.body.appendChild(tempContainer);

      const canvas = await html2canvas(tempContainer, {
        scale: 3, // Ultra high resolution
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 400,
        height: 600,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 400,
        windowHeight: 600
      });
      
      // Clean up
      document.body.removeChild(tempContainer);
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      // Fit the image to the full A4 page
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
      pdf.save(`${template.name}-invitation.pdf`);
    } catch (error) {
      console.error('Error exporting as PDF:', error);
      alert('Failed to export PDF. Please try again.');
    } finally {
      setIsExportingPDF(false);
    }
  };

  const toggleTextCase = () => {
    if (typeof window !== 'undefined') {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        if (!range.collapsed) {
          const selectedText = selection.toString();
          // Detect if mostly uppercase or lowercase
          const isMostlyUpper = selectedText.replace(/[^A-Z]/g, '').length >= selectedText.replace(/[^a-zA-Z]/g, '').length / 2;
          const toggled = isMostlyUpper ? selectedText.toLowerCase() : selectedText.toUpperCase();
          // Replace selected text
          const span = document.createElement('span');
          span.textContent = toggled;
          range.deleteContents();
          range.insertNode(span);
          // Reselect the toggled text
          selection.removeAllRanges();
          const newRange = document.createRange();
          newRange.selectNodeContents(span);
          selection.addRange(newRange);
        } 
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading template...</p>
        </div>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">Template not found</h2>
          <p className="text-gray-500 mb-6">The template you're looking for doesn't exist.</p>
          <Link 
            href="/templates" 
            className="inline-block px-6 py-3 bg-[#F18701] text-[#FFFCF0] font-medium rounded-lg shadow hover:bg-[#d46e00] hover:shadow-lg transition text-base border-2 border-[#F18701]"
          >
            Back to Templates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFCF0] font-serif text-[#095764]">
      {/* Top Bar */}
      <div className="w-full border-b border-[#ede6d6] bg-white flex items-center justify-between px-4 sm:px-8 py-3 editor-header-shadow">
        <div className="flex items-center gap-4">
          <Link
            href="/templates"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4EBD0] border border-[#F18701] shadow-sm text-[#F18701] hover:bg-[#F18701] hover:text-white transition-all duration-200 text-base font-serif font-medium focus:outline-none focus:ring-2 focus:ring-[#F18701] focus:ring-offset-2"
            style={{ minWidth: '80px' }}
            aria-label="Back"
          >
            <span className="mr-1 text-2xl transition-transform group-hover:-translate-x-1">&#8592;</span> Back
          </Link>
          <div className="flex items-center gap-3 ml-4 sm:ml-8">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded text-[#F18701] bg-[#F4EBD0] border border-[#F18701] mr-2"><LuPencilLine size={22}/></span>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif text-[#2F2F2F] leading-tight">Template Editor</span>
              <span className="text-xs sm:text-sm font-sans text-[#7A7A7A] font-normal mt-0.5">Editing: <span className="font-medium text-[#095764]">{template?.name}</span></span>
            </div>
          </div>
        </div>
      </div>
      {/* Formatting Toolbar - Canva style */}
      <div className="w-full py-2 sm:py-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-center">
            {/* Desktop Layout - Single Row */}
            <div className="hidden sm:flex bg-white rounded-lg shadow-lg border border-gray-200 p-2 sm:p-3 items-center gap-2 min-h-[44px] sm:min-h-[56px] overflow-x-auto">
              {/* Font Family Dropdown */}
              <select
                className="font-family-select px-3 py-1 rounded border border-gray-300 text-base font-sans mr-2 min-w-[170px] text-black"
                defaultValue="Montserrat"
                onChange={e => applyFontFamily(e.target.value)}
                title="Font Family"
              >
                <option value="'Montserrat', Arial, sans-serif" className="font-montserrat">Montserrat</option>
                <option value="'Roboto', Arial, sans-serif" className="font-roboto">Roboto</option>
                <option value="'Open Sans', Arial, sans-serif" className="font-open-sans">Open Sans</option>
                <option value="'Lato', Arial, sans-serif" className="font-lato">Lato</option>
                <option value="'Poppins', Arial, sans-serif" className="font-poppins">Poppins</option>
                <option value="'Raleway', Arial, sans-serif" className="font-raleway">Raleway</option>
                <option value="'Merriweather', serif" className="font-merriweather">Merriweather</option>
                <option value="'Playfair Display', serif" className="font-playfair-display">Playfair Display</option>
                <option value="'Dancing Script', cursive" className="font-dancing-script">Dancing Script</option>
                <option value="'Pacifico', cursive" className="font-pacifico">Pacifico</option>
                <option value="'Great Vibes', cursive" className="font-great-vibes">Great Vibes</option>
                <option value="'Caveat', cursive" className="font-caveat">Caveat</option>
                <option value="'Oswald', Arial, sans-serif" className="font-oswald">Oswald</option>
                <option value="'Bebas Neue', Arial, sans-serif" className="font-bebas-neue">Bebas Neue</option>
                <option value="'Indie Flower', cursive" className="font-indie-flower">Indie Flower</option>
                <option value="'Courier New', Courier, monospace" className="font-courier-new">Courier New</option>
                <option value="Georgia, serif" className="font-georgia">Georgia</option>
                <option value="'Comic Sans MS', cursive, sans-serif" className="font-comic-sans">Comic Sans MS</option>
                <option value="'Fira Sans', Arial, sans-serif" className="font-fira-sans">Fira Sans</option>
                <option value="'Quicksand', Arial, sans-serif" className="font-quicksand">Quicksand</option>
                <option value="Arial, sans-serif" className="font-arial">Arial</option>
                <option value="'Inter', sans-serif" className="font-inter">Inter</option>
              </select>
              {/* Font Size Dropdown */}
              <select
                className="px-2 py-1 rounded border border-gray-300 text-base font-sans mr-2 min-w-[60px] text-black"
                defaultValue="16"
                onChange={e => applyFontSize(e.target.value)}
                title="Font Size"
              >
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
                <option value="24">24</option>
                <option value="32">32</option>
                <option value="48">48</option>
                <option value="64">64</option>
                <option value="96">96</option>
                <option value="128">128</option>
              </select>
              {/* Formatting Buttons */}
              <button onMouseDown={e => { e.preventDefault(); applyFormatting('bold'); }} className={`p-2 rounded transition-colors ${formattingState.bold ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Bold (Ctrl+B)"><FaBold size={14} /></button>
              <button onMouseDown={e => { e.preventDefault(); applyFormatting('italic'); }} className={`p-2 rounded transition-colors ${formattingState.italic ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Italic (Ctrl+I)"><FaItalic size={14} /></button>
              <button onMouseDown={e => { e.preventDefault(); applyFormatting('underline'); }} className={`p-2 rounded transition-colors ${formattingState.underline ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Underline (Ctrl+U)"><FaUnderline size={14} /></button>
              <button onMouseDown={e => { e.preventDefault(); applyFormatting('strikethrough'); }} className={`p-2 rounded transition-colors ${formattingState.strikethrough ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Strikethrough"><FaStrikethrough size={14} /></button>
              {/* Aa (case) */}
              <button onMouseDown={e => { e.preventDefault(); toggleTextCase(); }} className="p-2 rounded hover:bg-gray-100 transition-colors text-black text-lg" title="Uppercase/Lowercase">Aa</button>
              {/* Text Color */}
              <div className="flex items-center gap-1 border-l border-gray-300 pl-2 ml-2">
                <label className="relative cursor-pointer group" title="Text Color">
                  <input
                    type="color"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    defaultValue={template.defaultColors.text || "#095764"}
                    onChange={(e) => applyTextColor(e.target.value)}
                    aria-label="Text Color"
                  />
                  <FaPalette
                    size={22}
                    style={{ color: textColor || '#222', transition: 'color 0.2s' }}
                    className="hover:scale-110 transition-transform"
                  />
                </label>
              </div>
              {/* Alignment Buttons */}
              <div className="flex items-center gap-1 border-l border-gray-300 pl-2 ml-2">
                <button onMouseDown={e => { e.preventDefault(); applyAlignment('left'); }} className={`p-2 rounded transition-colors ${formattingState.alignLeft ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Align Left"><FaAlignLeft size={14} /></button>
                <button onMouseDown={e => { e.preventDefault(); applyAlignment('center'); }} className={`p-2 rounded transition-colors ${formattingState.alignCenter ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Align Center"><FaAlignCenter size={14} /></button>
                <button onMouseDown={e => { e.preventDefault(); applyAlignment('right'); }} className={`p-2 rounded transition-colors ${formattingState.alignRight ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Align Right"><FaAlignRight size={14} /></button>
                <button onMouseDown={e => { e.preventDefault(); applyAlignment('justify'); }} className={`p-2 rounded transition-colors ${formattingState.alignJustify ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Justify"><FaAlignJustify size={14} /></button>
              </div>
            </div>

            {/* Mobile Layout - Two Rows/Steps */}
            <div className="sm:hidden flex flex-col gap-2 w-full">
              {/* Step 1: Font Controls */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 flex items-center justify-between gap-2 min-h-[44px]">
                {/* Font Family Dropdown */}
                <select
                  className="font-family-select px-2 py-1 rounded border border-gray-300 text-sm font-sans flex-1 text-black"
                  defaultValue="Montserrat"
                  onChange={e => applyFontFamily(e.target.value)}
                  title="Font Family"
                >
                  <option value="'Montserrat', Arial, sans-serif" className="font-montserrat">Montserrat</option>
                  <option value="'Roboto', Arial, sans-serif" className="font-roboto">Roboto</option>
                  <option value="'Open Sans', Arial, sans-serif" className="font-open-sans">Open Sans</option>
                  <option value="'Lato', Arial, sans-serif" className="font-lato">Lato</option>
                  <option value="'Poppins', Arial, sans-serif" className="font-poppins">Poppins</option>
                  <option value="'Raleway', Arial, sans-serif" className="font-raleway">Raleway</option>
                  <option value="'Merriweather', serif" className="font-merriweather">Merriweather</option>
                  <option value="'Playfair Display', serif" className="font-playfair-display">Playfair Display</option>
                  <option value="'Dancing Script', cursive" className="font-dancing-script">Dancing Script</option>
                  <option value="'Pacifico', cursive" className="font-pacifico">Pacifico</option>
                  <option value="'Great Vibes', cursive" className="font-great-vibes">Great Vibes</option>
                  <option value="'Caveat', cursive" className="font-caveat">Caveat</option>
                  <option value="'Oswald', Arial, sans-serif" className="font-oswald">Oswald</option>
                  <option value="'Bebas Neue', Arial, sans-serif" className="font-bebas-neue">Bebas Neue</option>
                  <option value="'Indie Flower', cursive" className="font-indie-flower">Indie Flower</option>
                  <option value="'Courier New', Courier, monospace" className="font-courier-new">Courier New</option>
                  <option value="Georgia, serif" className="font-georgia">Georgia</option>
                  <option value="'Comic Sans MS', cursive, sans-serif" className="font-comic-sans">Comic Sans MS</option>
                  <option value="'Fira Sans', Arial, sans-serif" className="font-fira-sans">Fira Sans</option>
                  <option value="'Quicksand', Arial, sans-serif" className="font-quicksand">Quicksand</option>
                  <option value="Arial, sans-serif" className="font-arial">Arial</option>
                  <option value="'Inter', sans-serif" className="font-inter">Inter</option>
                </select>
                {/* Font Size Dropdown */}
                <select
                  className="px-2 py-1 rounded border border-gray-300 text-sm font-sans min-w-[50px] text-black"
                  defaultValue="16"
                  onChange={e => applyFontSize(e.target.value)}
                  title="Font Size"
                >
                  <option value="12">12</option>
                  <option value="14">14</option>
                  <option value="16">16</option>
                  <option value="18">18</option>
                  <option value="24">24</option>
                  <option value="32">32</option>
                  <option value="48">48</option>
                  <option value="64">64</option>
                  <option value="96">96</option>
                  <option value="128">128</option>
                </select>
                {/* Text Color */}
                <label className="relative cursor-pointer group" title="Text Color">
                  <input
                    type="color"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    defaultValue={template.defaultColors.text || "#095764"}
                    onChange={(e) => applyTextColor(e.target.value)}
                    aria-label="Text Color"
                  />
                  <FaPalette
                    size={18}
                    style={{ color: textColor || '#095764', transition: 'color 0.2s' }}
                    className="hover:scale-110 transition-transform"
                  />
                </label>
              </div>

              {/* Step 2: Formatting Controls */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 flex items-center justify-between gap-2 min-h-[44px]">
                {/* Formatting Buttons */}
                <div className="flex items-center gap-1">
                  <button onMouseDown={e => { e.preventDefault(); applyFormatting('bold'); }} className={`p-2 rounded transition-colors ${formattingState.bold ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Bold (Ctrl+B)"><FaBold size={14} /></button>
                  <button onMouseDown={e => { e.preventDefault(); applyFormatting('italic'); }} className={`p-2 rounded transition-colors ${formattingState.italic ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Italic (Ctrl+I)"><FaItalic size={14} /></button>
                  <button onMouseDown={e => { e.preventDefault(); applyFormatting('underline'); }} className={`p-2 rounded transition-colors ${formattingState.underline ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Underline (Ctrl+U)"><FaUnderline size={14} /></button>
                  <button onMouseDown={e => { e.preventDefault(); applyFormatting('strikethrough'); }} className={`p-2 rounded transition-colors ${formattingState.strikethrough ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Strikethrough"><FaStrikethrough size={14} /></button>
                </div>
                {/* Aa (case) */}
                <button onMouseDown={e => { e.preventDefault(); toggleTextCase(); }} className="p-2 rounded hover:bg-gray-100 transition-colors text-black font-bold text-base" title="Uppercase/Lowercase">Aa</button>
                {/* Alignment Buttons */}
                <div className="flex items-center gap-1">
                  <button onMouseDown={e => { e.preventDefault(); applyAlignment('left'); }} className={`p-2 rounded transition-colors ${formattingState.alignLeft ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Align Left"><FaAlignLeft size={14} /></button>
                  <button onMouseDown={e => { e.preventDefault(); applyAlignment('center'); }} className={`p-2 rounded transition-colors ${formattingState.alignCenter ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Align Center"><FaAlignCenter size={14} /></button>
                  <button onMouseDown={e => { e.preventDefault(); applyAlignment('right'); }} className={`p-2 rounded transition-colors ${formattingState.alignRight ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Align Right"><FaAlignRight size={14} /></button>
                  <button onMouseDown={e => { e.preventDefault(); applyAlignment('justify'); }} className={`p-2 rounded transition-colors ${formattingState.alignJustify ? 'bg-gray-200 text-black' : 'text-black hover:bg-gray-100'} `} title="Justify"><FaAlignJustify size={14} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-8 px-2 sm:px-4 pb-8">
        {/* Preview & Export (mobile: vertical, desktop: left) */}
        <div className="flex-1 flex flex-col items-center">
          <div ref={cardRef} className="bg-white rounded-2xl shadow p-2 sm:p-8 flex flex-col items-center w-full max-w-[520px] mx-auto card-preview-container">
            <HtmlEditor 
              template={template} 
              onContentChange={handleContentChange}
              formattingState={formattingState}
              onFormattingChange={handleFormattingChange}
            />
          </div>
          {/* Export Options - show only on mobile */}
          <div className="w-full max-w-[520px] mt-4 sm:hidden">
            <div className="bg-[#EAE7DC] rounded-2xl shadow p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-base font-serif text-[#2F2F2F] font-medium">Export Options</span>
              </div>
              <button 
                onClick={exportAsImage}
                disabled={isExportingImage || isExportingPDF}
                className={`w-full h-10 px-4 rounded-lg font-normal font-poppins export-btn border border-[#F18701] transition text-lg leading-tight shadow mb-2 flex items-center justify-center ${isExportingImage ? 'bg-[#F9F5EF] text-[#7A7A7A] border-[#F9F5EF] cursor-not-allowed opacity-70' : 'bg-[#F4EBD0] text-[#F18701] hover:bg-[#F18701] hover:text-white hover:shadow-lg'}`}
              >
                {isExportingImage ? 'Exporting...' : 'Export as Image'}
              </button>
              <button 
                onClick={exportAsPDF}
                disabled={isExportingImage || isExportingPDF}
                className={`w-full h-10 px-4 rounded-lg font-normal font-poppins export-btn border border-[#F18701] transition text-lg leading-tight shadow mb-3 flex flex-col items-center justify-center ${isExportingPDF ? 'bg-[#F9F5EF] text-[#7A7A7A] border-[#F9F5EF] cursor-not-allowed opacity-70' : 'bg-[#F4EBD0] text-[#F18701] hover:bg-[#F18701] hover:text-white hover:shadow-lg'}`}
              >
                <span className="font-normal">{isExportingPDF ? 'Exporting...' : 'Export as PDF'}</span>
                <span className={`block text-xs font-sans font-normal mt-0.5 leading-tight ${isExportingPDF ? 'text-[#7A7A7A]' : 'text-inherit'}`}>Print-ready document format</span>
              </button>
              <div className="p-3 text-xs text-[#7c6a4d] font-sans">
                <div className="font-semibold mb-1 text-[#2F2F2F]">Export Tips:</div>
                <ul className="list-disc list-inside text-[#7A7A7A]">
                  <li>JPG for social media sharing</li>
                  <li>PDF for professional printing</li>
                  <li>Exports are high-resolution (2x scale)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar: hide on mobile */}
        <div className="hidden sm:flex w-[340px] flex-col justify-between">
          {/* Top sections with equal spacing */}
          <div className="flex flex-col gap-6">
            {/* Editing Instructions */}
            <div className="bg-[#F4EBD0] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#b49b6c] text-xl">&#8505;</span>
              <span className="font-semibold text-[#2F2F2F] text-[15px] font-serif">Editing Instructions:</span>
            </div>
            <ul className="list-disc pl-0 ml-5 text-[#7A7A7A] text-[14px] font-sans space-y-1 leading-snug">
              <li>Click on any text with dashed outline to edit</li>
              <li>Select text to show formatting toolbar</li>
              <li>Changes are saved automatically</li>
              <li>Use export buttons to download your invitation</li>
            </ul>
          </div>
          {/* Export Options (desktop only) */}
            <div className="bg-[#F4EBD0] rounded-2xl shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-serif text-[#2F2F2F] font-medium">Export Options</span>
            </div>
            <button 
              onClick={exportAsImage}
              disabled={isExportingImage || isExportingPDF}
              className={`w-full h-10 px-4 rounded-lg font-normal font-poppins export-btn border border-[#F18701] transition text-lg leading-tight shadow mb-2 flex items-center justify-center ${isExportingImage ? 'bg-[#F9F5EF] text-[#7A7A7A] border-[#F9F5EF] cursor-not-allowed opacity-70' : 'bg-[#F4EBD0] text-[#F18701] hover:bg-[#F18701] hover:text-white hover:shadow-lg'}`}
            >
              {isExportingImage ? 'Exporting...' : 'Export as Image'}
            </button>
            <button 
              onClick={exportAsPDF}
              disabled={isExportingImage || isExportingPDF}
              className={`w-full h-10 px-4 rounded-lg font-normal font-poppins export-btn border border-[#F18701] transition text-lg leading-tight shadow mb-3 flex flex-col items-center justify-center ${isExportingPDF ? 'bg-[#F9F5EF] text-[#7A7A7A] border-[#F9F5EF] cursor-not-allowed opacity-70' : 'bg-[#F4EBD0] text-[#F18701] hover:bg-[#F18701] hover:text-white hover:shadow-lg'}`}
            >
              <span className="font-normal">{isExportingPDF ? 'Exporting...' : 'Export as PDF'}</span>
              <span className={`block text-xs font-sans font-normal mt-0.5 leading-tight ${isExportingPDF ? 'text-[#7A7A7A]' : 'text-inherit'}`}>Print-ready document format</span>
            </button>
            <div className="p-3 text-xs text-[#7c6a4d] font-sans">
              <div className="font-semibold mb-1 text-[#2F2F2F]">Export Tips:</div>
              <ul className="list-disc list-inside text-[#7A7A7A]">
                <li>JPG for social media sharing</li>
                <li>PDF for professional printing</li>
                <li>Exports are high-resolution (2x scale)</li>
              </ul>
            </div>
          </div>
          </div>
          
          {/* Template Details - positioned at bottom */}
          <div className="bg-[#F4EBD0] rounded-2xl shadow p-6">
            <div className="text-base font-serif text-[#2F2F2F] font-medium mb-4">Template Details</div>
            <div className="flex flex-col gap-2 text-sm font-sans">
              <div className="flex justify-between"><span className="text-[#2F2F2F]">Name:</span><span className="text-[#7A7A7A] font-medium">{template.name}</span></div>
              <div className="flex justify-between"><span className="text-[#2F2F2F]">Category:</span><span className="text-[#7A7A7A] font-medium capitalize">{template.category}</span></div>
              <div className="flex justify-between"><span className="text-[#2F2F2F]">Format:</span><span className="text-[#7A7A7A] font-medium">400×600px</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 