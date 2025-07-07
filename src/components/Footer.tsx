import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon
                  name="Code"
                  size={20}
                  className="text-primary-foreground"
                />
              </div>
              <span className="text-2xl font-bold">BURO1</span>
            </Link>
            <p className="text-muted-foreground">
              Технологичные решения для современного бизнеса
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Внедрение 1С
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Интеграции
                </Link>
              </li>
              <li>
                <Link
                  to="/marking"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Маркировка
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Аналитика
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Решения</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/database"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Выбор базы 1С
                </Link>
              </li>
              <li>
                <Link
                  to="/diagnostics"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Диагностика 1С
                </Link>
              </li>
              <li>
                <Link
                  to="/cases"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Кейсы
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  О компании
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@buro1.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>г. Москва</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 BURO1. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
