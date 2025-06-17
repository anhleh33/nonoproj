import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Header.css'

export default function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <header>
      <motion.div
        className="header-content"
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <h1>ANH LE HOANG PORTFOLIO</h1>
        <i className="fa-solid fa-spinner fa-spin"></i>
      </motion.div>
    </header>
  );
}
