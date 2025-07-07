import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Code" size={20} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">BURO1</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#services"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a
              href="#cases"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Кейсы
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button>Оставить заявку</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              "url(/img/1a52c4d4-5240-451b-97b6-4480f19d3851.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              <Icon name="Zap" size={16} className="mr-2" />
              Технологичные решения для бизнеса
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Превращаем идеи в
              <span className="text-primary"> цифровые решения</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              BURO1 — ваш надёжный партнёр в мире 1С, интеграций и автоматизации
              бизнеса. Создаём решения, которые работают на результат.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader className="text-center">
                <Icon
                  name="ShieldCheck"
                  size={48}
                  className="mx-auto mb-4 text-primary"
                />
                <CardTitle>Работа с кодами маркировки</CardTitle>
                <CardDescription>
                  Настройка и сопровождение Честного Знака
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader className="text-center">
                <Icon
                  name="Database"
                  size={48}
                  className="mx-auto mb-4 text-primary"
                />
                <CardTitle>Какая база мне нужна?</CardTitle>
                <CardDescription>
                  Поможем выбрать оптимальную систему 1С
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader className="text-center">
                <Icon
                  name="Settings"
                  size={48}
                  className="mx-auto mb-4 text-primary"
                />
                <CardTitle>В порядке ли у меня 1С?</CardTitle>
                <CardDescription>
                  Бесплатная диагностика системы
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр IT-услуг для автоматизации и развития вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="Server" size={24} />
                </div>
                <CardTitle>Внедрение 1С</CardTitle>
                <CardDescription>
                  УНФ, БП, УТ — полный цикл внедрения и настройки
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="Link" size={24} />
                </div>
                <CardTitle>Интеграции</CardTitle>
                <CardDescription>
                  Связываем 1С с сайтами, CRM, маркетплейсами, ЭДО
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="Shield" size={24} />
                </div>
                <CardTitle>Маркировка</CardTitle>
                <CardDescription>
                  Настройка работы с Честным Знаком
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="BarChart" size={24} />
                </div>
                <CardTitle>Аналитика</CardTitle>
                <CardDescription>
                  Отчёты и печатные формы под ваши задачи
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </div>
                <CardTitle>Telegram-боты</CardTitle>
                <CardDescription>
                  Автоматизация через мессенджеры
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="Users" size={24} />
                </div>
                <CardTitle>Консультации</CardTitle>
                <CardDescription>
                  Экспертная поддержка и обучение
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Успешные кейсы</h2>
            <p className="text-xl text-muted-foreground">
              Решения, которые работают на результат
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="TrendingUp" size={64} className="text-primary" />
              </div>
              <CardHeader>
                <CardTitle>Автоматизация торговли</CardTitle>
                <CardDescription>
                  Внедрение 1С:УТ для сети магазинов. Увеличение скорости
                  обработки заказов на 300%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">1С:УТ</Badge>
                  <Badge variant="secondary">Интеграция</Badge>
                  <Badge variant="secondary">Маркировка</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="Bot" size={64} className="text-primary" />
              </div>
              <CardHeader>
                <CardTitle>Telegram-бот для заказов</CardTitle>
                <CardDescription>
                  Разработка бота для приёма заказов. Автоматизация 80% входящих
                  заявок
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Telegram</Badge>
                  <Badge variant="secondary">API</Badge>
                  <Badge variant="secondary">1С</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="Gauge" size={64} className="text-primary" />
              </div>
              <CardHeader>
                <CardTitle>Система аналитики</CardTitle>
                <CardDescription>
                  Создание dashboard для управления продажами. Рост прибыли на
                  25%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Аналитика</Badge>
                  <Badge variant="secondary">Отчёты</Badge>
                  <Badge variant="secondary">BI</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы к цифровой трансформации?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Получите бесплатную консультацию и узнайте, как автоматизировать ваш
            бизнес
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение часа
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@buro1.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Технологическая, 1
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Опишите вашу задачу, и мы предложим решение
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Имя" />
                    </div>
                    <div>
                      <Input placeholder="Телефон" />
                    </div>
                  </div>
                  <div>
                    <Input placeholder="Email" />
                  </div>
                  <div>
                    <Input placeholder="Компания" />
                  </div>
                  <div>
                    <Textarea placeholder="Опишите вашу задачу" rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon
                    name="Code"
                    size={20}
                    className="text-primary-foreground"
                  />
                </div>
                <span className="text-2xl font-bold">BURO1</span>
              </div>
              <p className="text-muted-foreground">
                Технологичные решения для современного бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Внедрение 1С</li>
                <li>Интеграции</li>
                <li>Маркировка</li>
                <li>Аналитика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Решения</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Telegram-боты</li>
                <li>Автоматизация</li>
                <li>Консультации</li>
                <li>Поддержка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>+7 (999) 123-45-67</li>
                <li>info@buro1.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 BURO1. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
