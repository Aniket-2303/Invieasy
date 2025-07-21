"use client";
import { useState, useEffect, useRef } from 'react';
import { Template } from '@/data/templates';

interface HtmlEditorProps {
  template: Template;
  onContentChange: (htmlContent: string) => void;
  formattingState: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikethrough: boolean;
    alignLeft: boolean;
    alignCenter: boolean;
    alignRight: boolean;
    alignJustify: boolean;
  };
  onFormattingChange: (state: any) => void;
}

export default function HtmlEditor({ template, onContentChange, formattingState, onFormattingChange }: HtmlEditorProps) {
  const [htmlContent, setHtmlContent] = useState(template.htmlContent);
  const [editableElements, setEditableElements] = useState<HTMLElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ x: 0, y: 0 });
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    setHtmlContent(template.htmlContent);
    setHasUnsavedChanges(false);
  }, [template]);

  useEffect(() => {
    onContentChange(htmlContent);
  }, [htmlContent, onContentChange]);

  useEffect(() => {
    if (toolbarRef.current && showToolbar) {
      toolbarRef.current.style.setProperty('--toolbar-x', `${toolbarPosition.x}px`);
      toolbarRef.current.style.setProperty('--toolbar-y', `${toolbarPosition.y}px`);
    }
  }, [toolbarPosition, showToolbar]);

  // Initialize the editor only once
  useEffect(() => {
    if (canvasRef.current && !isInitializedRef.current) {
      initializeEditor();
      isInitializedRef.current = true;
    }
  }, []);

  const initializeEditor = () => {
    if (!canvasRef.current) return;

      // Inject the template HTML
    canvasRef.current.innerHTML = template.htmlContent;
      
      // Find all contenteditable elements
      const editables = canvasRef.current.querySelectorAll('[contenteditable="true"]');
    const editableArray = Array.from(editables) as HTMLElement[];
    setEditableElements(editableArray);
      
      // Add event listeners for editing
    editableArray.forEach((element, index) => {
      const el = element as HTMLElement;
      
      // Add data-index for identification
      el.setAttribute('data-index', index.toString());
      
      // Add event listeners
      el.addEventListener('focus', () => handleElementFocus(el, index));
      el.addEventListener('blur', () => handleElementBlur(el, index));
      el.addEventListener('input', (e) => handleTextInput(e, index));
      el.addEventListener('click', () => handleElementClick(el));
      el.addEventListener('keydown', (e) => handleKeyDown(e, el, index));
      el.addEventListener('mouseup', () => handleTextSelection(el));
      el.addEventListener('keyup', () => handleTextSelection(el));
      
      // Set cursor to end of text when focused for the first time
      el.addEventListener('focus', () => {
        setTimeout(() => {
          if (el.textContent) {
            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(el);
            range.collapse(false);
            selection?.removeAllRanges();
            selection?.addRange(range);
          }
        }, 0);
      });
    });
  };

  const handleElementFocus = (element: HTMLElement, index: number) => {
    setSelectedElement(index);
    element.classList.add('editing-active');
  };

  const handleElementBlur = (element: HTMLElement, index: number) => {
    element.classList.remove('editing-active');
    setShowToolbar(false);
  };

  const handleElementClick = (element: HTMLElement) => {
    element.focus();
  };

  const handleKeyDown = (e: KeyboardEvent, element: HTMLElement, index: number) => {
    if (e.key === 'Escape') {
      element.blur();
    }
    
    // Keyboard shortcuts for formatting
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      switch (e.key.toLowerCase()) {
        case 'b':
          applyFormatting('bold');
          break;
        case 'i':
          applyFormatting('italic');
          break;
        case 'u':
          applyFormatting('underline');
          break;
        case 'z':
          if (e.shiftKey) {
            document.execCommand('redo', false);
          } else {
            document.execCommand('undo', false);
          }
          break;
      }
    }
  };

  const handleTextInput = (e: Event, index: number) => {
    const target = e.target as HTMLElement;
    const newText = target.innerText;
    
    // Update the HTML content without recreating the DOM
      const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
      const editables = doc.querySelectorAll('[contenteditable="true"]');
      if (editables[index]) {
        editables[index].textContent = newText;
      }
    
    const newHtmlContent = doc.body.innerHTML;
    setHtmlContent(newHtmlContent);
    setHasUnsavedChanges(true);
    
    // Update the onContentChange callback
    onContentChange(newHtmlContent);
  };

  const handleTextSelection = (element: HTMLElement) => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      const rect = element.getBoundingClientRect();
      setToolbarPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      });
      setShowToolbar(true);
      updateFormattingState();
    } else {
      setShowToolbar(false);
    }
  };

  const updateFormattingState = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const element = range.commonAncestorContainer.nodeType === Node.TEXT_NODE 
        ? range.commonAncestorContainer.parentElement 
        : range.commonAncestorContainer as HTMLElement;
      
      if (element) {
        const newState = {
          bold: document.queryCommandState('bold'),
          italic: document.queryCommandState('italic'),
          underline: document.queryCommandState('underline'),
          strikethrough: document.queryCommandState('strikethrough'),
          alignLeft: element.style.textAlign === 'left' || !element.style.textAlign,
          alignCenter: element.style.textAlign === 'center',
          alignRight: element.style.textAlign === 'right',
          alignJustify: element.style.textAlign === 'justify'
        };
        onFormattingChange(newState);
      }
    }
  };

  const applyFormatting = (command: string, value?: string) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      if (range.toString().length > 0) {
        document.execCommand(command, false, value);
        updateFormattingState();
      } else {
        // If no text is selected, apply to the current element
        const element = range.commonAncestorContainer.nodeType === Node.TEXT_NODE 
          ? range.commonAncestorContainer.parentElement 
          : range.commonAncestorContainer as HTMLElement;
        
        if (element) {
          switch (command) {
            case 'bold':
              element.style.fontWeight = element.style.fontWeight === 'bold' ? 'normal' : 'bold';
              break;
            case 'italic':
              element.style.fontStyle = element.style.fontStyle === 'italic' ? 'normal' : 'italic';
              break;
            case 'underline':
              element.style.textDecoration = element.style.textDecoration.includes('underline') 
                ? element.style.textDecoration.replace('underline', '').trim() 
                : element.style.textDecoration + ' underline';
              break;
            case 'strikethrough':
              element.style.textDecoration = element.style.textDecoration.includes('line-through') 
                ? element.style.textDecoration.replace('line-through', '').trim() 
                : element.style.textDecoration + ' line-through';
              break;
          }
          updateFormattingState();
        }
      }
    }
  };

  const applyAlignment = (alignment: string) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const element = range.commonAncestorContainer.nodeType === Node.TEXT_NODE 
        ? range.commonAncestorContainer.parentElement 
        : range.commonAncestorContainer as HTMLElement;
      
      if (element) {
        element.style.textAlign = alignment;
        updateFormattingState();
      }
    }
  };

  const applyFontSize = (size: string) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const element = range.commonAncestorContainer.nodeType === Node.TEXT_NODE 
        ? range.commonAncestorContainer.parentElement 
        : range.commonAncestorContainer as HTMLElement;
      
      if (element) {
        element.style.fontSize = size + 'px';
      }
    }
  };

  const applyFontFamily = (fontFamily: string) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const element = range.commonAncestorContainer.nodeType === Node.TEXT_NODE 
        ? range.commonAncestorContainer.parentElement 
        : range.commonAncestorContainer as HTMLElement;
      
      if (element) {
        element.style.fontFamily = fontFamily;
      }
    }
  };

  const applyTextColor = (color: string) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const element = range.commonAncestorContainer.nodeType === Node.TEXT_NODE 
        ? range.commonAncestorContainer.parentElement 
        : range.commonAncestorContainer as HTMLElement;
      
      if (element) {
        element.style.color = color;
      }
    }
  };

  const applyBackgroundColor = (color: string) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const element = range.commonAncestorContainer.nodeType === Node.TEXT_NODE 
        ? range.commonAncestorContainer.parentElement 
        : range.commonAncestorContainer as HTMLElement;
      
      if (element) {
        element.style.backgroundColor = color;
      }
    }
  };

  const handleSave = async () => {
    try {
      // Simulate save operation
      await new Promise(resolve => setTimeout(resolve, 500));
      setHasUnsavedChanges(false);
      setLastSaved(new Date());
    } catch (error) {
      console.error('Save failed:', error);
    }
  };

  const handleExport = (format: 'html' | 'png' | 'pdf') => {
    switch (format) {
      case 'html':
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${template.name}-invitation.html`;
        a.click();
        URL.revokeObjectURL(url);
        break;
    }
  };

  // Expose formatting functions to parent component
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).applyFormatting = applyFormatting;
      (window as any).applyAlignment = applyAlignment;
      (window as any).applyFontSize = applyFontSize;
      (window as any).applyFontFamily = applyFontFamily;
      (window as any).applyTextColor = applyTextColor;
      (window as any).applyBackgroundColor = applyBackgroundColor;
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-auto template-preview-outer relative">
      <div className="inline-block template-preview-inline">
        <div
          ref={canvasRef}
          className=""
        />
      </div>
    </div>
  );
} 