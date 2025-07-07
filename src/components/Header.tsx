import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Code" size={20} className="text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground">BURO1</span>
        </Link>

        <nav className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className={`transition-colors ${isActive("/") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            Главная
          </Link>
          <Link
            to="/services"
            className={`transition-colors ${isActive("/services") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            Услуги
          </Link>
          <Link
            to="/marking"
            className={`transition-colors ${isActive("/marking") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            Маркировка
          </Link>
          <Link
            to="/database"
            className={`transition-colors ${isActive("/database") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            Выбор базы
          </Link>
          <Link
            to="/diagnostics"
            className={`transition-colors ${isActive("/diagnostics") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            Диагностика
          </Link>
          <Link
            to="/cases"
            className={`transition-colors ${isActive("/cases") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            Кейсы
          </Link>
          <Link
            to="/about"
            className={`transition-colors ${isActive("/about") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            О нас
          </Link>
          <Link
            to="/contact"
            className={`transition-colors ${isActive("/contact") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            Контакты
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link to="/contact">Оставить заявку</Link>
          </Button>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="lg:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
