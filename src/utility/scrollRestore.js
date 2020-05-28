import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestore() {
  const { pathname } = useLocation();

  useEffect(() => {document.body.scrollTop = 0 }, [pathname]);

  return null;
}