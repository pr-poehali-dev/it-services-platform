import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать проект
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/cases">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть кейсы
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Преимущества BURO1</h2>
            <p className="text-lg text-muted-foreground">
              Почему клиенты выбирают нас для автоматизации своего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon
                  name="Clock"
                  size={48}
                  className="mx-auto mb-4 text-primary"
                />
                <CardTitle className="text-lg">Быстрое внедрение</CardTitle>
                <CardDescription>Запуск за 2-4 недели</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon
                  name="Users"
                  size={48}
                  className="mx-auto mb-4 text-primary"
                />
                <CardTitle className="text-lg">Опытная команда</CardTitle>
                <CardDescription>7+ лет в сфере 1С</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon
                  name="Headphones"
                  size={48}
                  className="mx-auto mb-4 text-primary"
                />
                <CardTitle className="text-lg">24/7 поддержка</CardTitle>
                <CardDescription>Всегда на связи</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon
                  name="Trophy"
                  size={48}
                  className="mx-auto mb-4 text-primary"
                />
                <CardTitle className="text-lg">100+ проектов</CardTitle>
                <CardDescription>Успешно реализовано</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Популярные решения</h2>
            <p className="text-lg text-muted-foreground">
              Выберите нужное направление для быстрой консультации
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              asChild
            >
              <Link to="/marking">
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
              </Link>
            </Card>
            <Card
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              asChild
            >
              <Link to="/database">
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
              </Link>
            </Card>
            <Card
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              asChild
            >
              <Link to="/diagnostics">
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
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Основные услуги</h2>
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
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link to="/services">
                Посмотреть все услуги
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ключевые кейсы</h2>
            <p className="text-xl text-muted-foreground">
              Топ-3 проекта, которые показывают наши возможности
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
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link to="/cases">
                Посмотреть все кейсы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
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
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link to="/contact">
                <Icon name="Phone" size={20} className="mr-2" />
                Оставить заявку
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/contact">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
