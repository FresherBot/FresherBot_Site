
import { useState, useEffect, useRef } from "react";

interface TypedTextProps {
  text: string;
  typingSpeed?: number;
  delay?: number;
}

const TypedText = ({ text, typingSpeed = 50, delay = 0 }: TypedTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Reset state when text prop changes
    setDisplayText("");
    setCurrentIndex(0);
    setIsTyping(false);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Start typing after delay
    timeoutRef.current = setTimeout(() => {
      setIsTyping(true);
    }, delay);
  }, [text, delay]);

  useEffect(() => {
    if (!isTyping) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
        console.log("Adding character:", text[currentIndex], "Character code:", text.charCodeAt(currentIndex), "Current text:", displayText);
      }, typingSpeed);
      
      timeoutRef.current = timeout;
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      console.log("Typing complete. Final text:", displayText);
    }
  }, [currentIndex, isTyping, text, typingSpeed, displayText]);

  return <span>{displayText}</span>;
};

export default TypedText;
