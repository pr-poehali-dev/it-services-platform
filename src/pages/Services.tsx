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

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Услуги <span className="text-primary">BURO1</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Полный спектр IT-услуг для автоматизации и развития вашего бизнеса
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 1С Implementation */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="Server" size={32} />
                </div>
                <CardTitle className="text-2xl">Внедрение 1С</CardTitle>
                <CardDescription className="text-lg">
                  Полный цикл внедрения и настройки конфигураций 1С
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">
                        1С:Управление нашей фирмой (УНФ)
                      </h4>
                      <p className="text-muted-foreground">
                        Для малого бизнеса и ИП
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">
                        1С:Бухгалтерия предприятия (БП)
                      </h4>
                      <p className="text-muted-foreground">
                        Ведение учёта и отчётности
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">
                        1С:Управление торговлей (УТ)
                      </h4>
                      <p className="text-muted-foreground">
                        Автоматизация торговых процессов
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Обучение сотрудников</h4>
                      <p className="text-muted-foreground">
                        Быстрое освоение системы
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/contact">Заказать внедрение</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Integrations */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="Link" size={32} />
                </div>
                <CardTitle className="text-2xl">Интеграции</CardTitle>
                <CardDescription className="text-lg">
                  Связываем 1С с внешними системами для автоматизации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Интеграция с сайтами</h4>
                      <p className="text-muted-foreground">
                        Синхронизация товаров и заказов
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">CRM-системы</h4>
                      <p className="text-muted-foreground">
                        Единая база клиентов
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Маркетплейсы</h4>
                      <p className="text-muted-foreground">
                        Озон, Wildberries, Я.Маркет
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">ЭДО системы</h4>
                      <p className="text-muted-foreground">
                        Автоматический обмен документами
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/contact">Настроить интеграцию</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Marking */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="Shield" size={32} />
                </div>
                <CardTitle className="text-2xl">Маркировка товаров</CardTitle>
                <CardDescription className="text-lg">
                  Настройка работы с системой «Честный ЗНАК»
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Настройка в 1С</h4>
                      <p className="text-muted-foreground">
                        Подключение к ГИС МТ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Оборудование</h4>
                      <p className="text-muted-foreground">
                        Подбор и настройка сканеров
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Обучение персонала</h4>
                      <p className="text-muted-foreground">
                        Работа с маркированными товарами
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Техподдержка</h4>
                      <p className="text-muted-foreground">
                        Помощь в решении проблем
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/marking">Подробнее о маркировке</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Analytics */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="BarChart" size={32} />
                </div>
                <CardTitle className="text-2xl">Аналитика и отчёты</CardTitle>
                <CardDescription className="text-lg">
                  Создание отчётов и печатных форм под ваши задачи
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Управленческие отчёты</h4>
                      <p className="text-muted-foreground">
                        Для принятия решений
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Печатные формы</h4>
                      <p className="text-muted-foreground">
                        Документы под ваши требования
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Автоматическая рассылка</h4>
                      <p className="text-muted-foreground">
                        Отчёты по расписанию
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Дашборды</h4>
                      <p className="text-muted-foreground">
                        Визуализация данных
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/contact">Заказать аналитику</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Дополнительные услуги</h2>
            <p className="text-xl text-muted-foreground">
              Расширяем возможности вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon
                  name="MessageCircle"
                  size={48}
                  className="text-primary mb-4"
                />
                <CardTitle>Telegram-боты</CardTitle>
                <CardDescription>
                  Автоматизация бизнес-процессов через мессенджеры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Приём заказов через бота</li>
                  <li>• Уведомления о событиях</li>
                  <li>• Интеграция с 1С</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mb-4" />
                <CardTitle>Консультации</CardTitle>
                <CardDescription>
                  Экспертная поддержка и обучение сотрудников
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Аудит текущих процессов</li>
                  <li>• Оптимизация настроек</li>
                  <li>• Обучение персонала</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon name="Wrench" size={48} className="text-primary mb-4" />
                <CardTitle>Доработки</CardTitle>
                <CardDescription>
                  Модификация конфигураций под специфику бизнеса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Новые алгоритмы</li>
                  <li>• Специальные обработки</li>
                  <li>• Интеграция со сторонними системами</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна консультация?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Расскажите о своей задаче, и мы предложим оптимальное решение
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
                Получить консультацию
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/cases">
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть примеры
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
