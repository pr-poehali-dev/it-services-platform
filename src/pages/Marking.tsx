import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Icon from "@/components/ui/icon";

const Marking = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const faqItems = [
    {
      id: "what-is-marking",
      question: "Что такое маркировка товаров?",
      answer:
        "Маркировка товаров — это обязательная процедура нанесения специальных меток (DataMatrix кодов) на товары определённых категорий. Эти коды позволяют отслеживать путь товара от производителя до потребителя.",
    },
    {
      id: "who-must-mark",
      question: "Кто должен маркировать товары?",
      answer:
        "Маркировать товары должны все участники оборота: производители, импортёры, дистрибьюторы и розничные продавцы. Конкретные обязанности зависят от вашей роли в цепочке поставок.",
    },
    {
      id: "what-goods",
      question: "Какие товары подлежат маркировке?",
      answer:
        "Маркировке подлежат: обувь, одежда, табачные изделия, лекарства, парфюмерия, шины, фотоаппараты, молочные продукты, велосипеды, кресла-коляски и другие категории согласно действующему законодательству.",
    },
    {
      id: "penalties",
      question: "Какие штрафы за нарушение требований маркировки?",
      answer:
        "Штрафы варьируются от 5 000 до 300 000 рублей для юридических лиц в зависимости от категории нарушения. Также возможна приостановка деятельности до 90 суток.",
    },
    {
      id: "how-to-start",
      question: "Как начать работу с маркировкой?",
      answer:
        'Для начала работы нужно: 1) Зарегистрироваться в системе "Честный ЗНАК", 2) Получить электронную подпись, 3) Настроить учётную систему (1С), 4) Приобрести необходимое оборудование.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              <Icon name="Shield" size={16} className="mr-2" />
              Честный ЗНАК
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Работа с кодами <span className="text-primary">маркировки</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Полное сопровождение внедрения и работы с системой маркировки
              товаров
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/diagnostics">
                  <Icon name="Search" size={20} className="mr-2" />
                  Проверить готовность
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Наши услуги по маркировке
            </h2>
            <p className="text-xl text-muted-foreground">
              Комплексное решение для работы с Честным Знаком
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Icon name="Settings" size={48} className="text-primary mb-4" />
                <CardTitle>Настройка в 1С</CardTitle>
                <CardDescription>
                  Подключение и настройка модуля маркировки в вашей конфигурации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Интеграция с ГИС МТ</li>
                  <li>• Настройка документооборота</li>
                  <li>• Проверка корректности</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Icon
                  name="Smartphone"
                  size={48}
                  className="text-primary mb-4"
                />
                <CardTitle>Подбор оборудования</CardTitle>
                <CardDescription>
                  Помощь в выборе и настройке сканеров и принтеров
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Сканеры DataMatrix</li>
                  <li>• Принтеры этикеток</li>
                  <li>• Терминалы сбора данных</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mb-4" />
                <CardTitle>Обучение персонала</CardTitle>
                <CardDescription>
                  Подготовка сотрудников к работе с маркированными товарами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Практические занятия</li>
                  <li>• Методические материалы</li>
                  <li>• Сертификация знаний</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Step-by-step Instructions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Пошаговая инструкция</h2>
            <p className="text-xl text-muted-foreground">
              Как внедрить маркировку в вашем бизнесе
            </p>
          </div>

          <Tabs defaultValue="preparation" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="preparation">Подготовка</TabsTrigger>
              <TabsTrigger value="registration">Регистрация</TabsTrigger>
              <TabsTrigger value="setup">Настройка</TabsTrigger>
              <TabsTrigger value="launch">Запуск</TabsTrigger>
            </TabsList>

            <TabsContent value="preparation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="FileText"
                      size={24}
                      className="mr-2 text-primary"
                    />
                    Этап 1: Подготовка документов
                  </CardTitle>
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
                        <h4 className="font-semibold">Подготовка документов</h4>
                        <p className="text-muted-foreground">
                          ОГРН, ИНН, устав, доверенности
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
                          Анализ товарного ассортимента
                        </h4>
                        <p className="text-muted-foreground">
                          Определение подлежащих маркировке позиций
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
                        <h4 className="font-semibold">Планирование бюджета</h4>
                        <p className="text-muted-foreground">
                          Расчёт затрат на внедрение
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="registration" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="UserPlus"
                      size={24}
                      className="mr-2 text-primary"
                    />
                    Этап 2: Регистрация в системе
                  </CardTitle>
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
                          Регистрация в «Честный ЗНАК»
                        </h4>
                        <p className="text-muted-foreground">
                          Создание личного кабинета
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
                        <h4 className="font-semibold">Получение ЭЦП</h4>
                        <p className="text-muted-foreground">
                          Квалифицированная электронная подпись
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
                          Настройка прав доступа
                        </h4>
                        <p className="text-muted-foreground">
                          Назначение ответственных сотрудников
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="setup" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Settings"
                      size={24}
                      className="mr-2 text-primary"
                    />
                    Этап 3: Настройка системы
                  </CardTitle>
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
                        <h4 className="font-semibold">Обновление 1С</h4>
                        <p className="text-muted-foreground">
                          Установка модуля маркировки
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
                        <h4 className="font-semibold">Подключение к ГИС МТ</h4>
                        <p className="text-muted-foreground">
                          Настройка интеграции
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
                          Настройка оборудования
                        </h4>
                        <p className="text-muted-foreground">
                          Сканеры, принтеры, кассы
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="launch" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Rocket"
                      size={24}
                      className="mr-2 text-primary"
                    />
                    Этап 4: Запуск и тестирование
                  </CardTitle>
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
                        <h4 className="font-semibold">Тестовые операции</h4>
                        <p className="text-muted-foreground">
                          Проверка всех процессов
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
                          Практические занятия
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
                        <h4 className="font-semibold">Начало работы</h4>
                        <p className="text-muted-foreground">
                          Переход на штатный режим
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о маркировке
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item) => (
              <Card key={item.id}>
                <Collapsible
                  open={openFaq === item.id}
                  onOpenChange={() =>
                    setOpenFaq(openFaq === item.id ? null : item.id)
                  }
                >
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-left">
                        {item.question}
                      </CardTitle>
                      <Icon
                        name={openFaq === item.id ? "ChevronUp" : "ChevronDown"}
                        size={20}
                        className="text-muted-foreground"
                      />
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Полезные ссылки</h2>
            <p className="text-xl text-muted-foreground">
              Официальные ресурсы и документация
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon
                  name="ExternalLink"
                  size={32}
                  className="text-primary mb-2"
                />
                <CardTitle>Честный ЗНАК</CardTitle>
                <CardDescription>
                  Официальный сайт системы маркировки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://честныйзнак.рф"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Перейти на сайт
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon name="FileText" size={32} className="text-primary mb-2" />
                <CardTitle>Нормативные документы</CardTitle>
                <CardDescription>
                  Законы и постановления о маркировке
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://docs.crptech.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Документы
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon
                  name="HelpCircle"
                  size={32}
                  className="text-primary mb-2"
                />
                <CardTitle>Техподдержка</CardTitle>
                <CardDescription>Помощь пользователям системы</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://support.crptech.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Получить помощь
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Нужна помощь с маркировкой?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Мы поможем внедрить систему маркировки быстро и без ошибок
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
              <Link to="/diagnostics">
                <Icon name="Search" size={20} className="mr-2" />
                Проверить готовность
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marking;
