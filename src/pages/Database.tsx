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
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Database = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: "business_type",
      question: "Какой тип бизнеса у вас?",
      options: [
        { value: "retail", label: "Розничная торговля" },
        { value: "wholesale", label: "Оптовая торговля" },
        { value: "manufacturing", label: "Производство" },
        { value: "services", label: "Услуги" },
        { value: "ip", label: "ИП / Малый бизнес" },
      ],
    },
    {
      id: "employees",
      question: "Сколько сотрудников в компании?",
      options: [
        { value: "1", label: "1 человек (только я)" },
        { value: "2-5", label: "2-5 человек" },
        { value: "6-15", label: "6-15 человек" },
        { value: "16-50", label: "16-50 человек" },
        { value: "50+", label: "Более 50 человек" },
      ],
    },
    {
      id: "accounting",
      question: "Кто ведёт бухгалтерию?",
      options: [
        { value: "self", label: "Я сам(а)" },
        { value: "employee", label: "Штатный бухгалтер" },
        { value: "outsource", label: "Аутсорс" },
        { value: "none", label: "Пока никто" },
      ],
    },
    {
      id: "operations",
      question: "Какие операции вы выполняете?",
      options: [
        { value: "basic", label: "Простые операции купли-продажи" },
        { value: "inventory", label: "Управление складом" },
        { value: "production", label: "Производство товаров" },
        { value: "complex", label: "Сложные бизнес-процессы" },
      ],
    },
    {
      id: "budget",
      question: "Какой бюджет на автоматизацию?",
      options: [
        { value: "minimal", label: "Минимальный (до 50 000 руб.)" },
        { value: "medium", label: "Средний (50 000 - 200 000 руб.)" },
        { value: "high", label: "Высокий (200 000+ руб.)" },
        { value: "flexible", label: "Готов инвестировать в качество" },
      ],
    },
  ];

  const getRecommendation = () => {
    const { business_type, employees, accounting, operations, budget } =
      answers;

    // Логика выбора конфигурации
    if (business_type === "ip" || employees === "1" || budget === "minimal") {
      return {
        config: "1С:Управление нашей фирмой (УНФ)",
        description: "Идеальное решение для малого бизнеса и ИП",
        features: [
          "Ведение торговых операций",
          "Простая отчётность",
          "Управление денежными средствами",
          "Базовый складской учёт",
        ],
        price: "от 15 000 руб.",
        color: "bg-green-500",
      };
    }

    if (business_type === "services" || operations === "basic") {
      return {
        config: "1С:Бухгалтерия предприятия",
        description: "Полноценное ведение бухгалтерского учёта",
        features: [
          "Полный бухгалтерский учёт",
          "Налоговая отчётность",
          "Кадровый учёт",
          "Управление финансами",
        ],
        price: "от 25 000 руб.",
        color: "bg-blue-500",
      };
    }

    if (
      business_type === "retail" ||
      business_type === "wholesale" ||
      operations === "inventory"
    ) {
      return {
        config: "1С:Управление торговлей",
        description: "Комплексная автоматизация торговых процессов",
        features: [
          "Управление продажами",
          "Складской учёт",
          "Работа с клиентами",
          "Ценообразование",
        ],
        price: "от 35 000 руб.",
        color: "bg-purple-500",
      };
    }

    if (business_type === "manufacturing" || operations === "production") {
      return {
        config: "1С:Управление производственным предприятием",
        description: "Полная автоматизация производственных процессов",
        features: [
          "Планирование производства",
          "Управление ресурсами",
          "Себестоимость продукции",
          "Комплексная аналитика",
        ],
        price: "от 80 000 руб.",
        color: "bg-orange-500",
      };
    }

    return {
      config: "1С:Комплексная автоматизация",
      description: "Индивидуальное решение под ваши задачи",
      features: [
        "Анализ бизнес-процессов",
        "Подбор оптимальной конфигурации",
        "Интеграция с внешними системами",
        "Техническое сопровождение",
      ],
      price: "по запросу",
      color: "bg-red-500",
    };
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              <Icon name="Database" size={16} className="mr-2" />
              Подбор конфигурации
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Какая база <span className="text-primary">мне нужна?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Интерактивный помощник по выбору оптимальной конфигурации 1С
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {!showResult ? (
              <Card className="p-8">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl">
                      Вопрос {currentStep + 1} из {questions.length}
                    </CardTitle>
                    <Badge variant="outline">
                      {Math.round(progress)}% завершено
                    </Badge>
                  </div>
                  <Progress value={progress} className="mb-6" />
                  <CardDescription className="text-lg">
                    {questions[currentStep].question}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={answers[questions[currentStep].id] || ""}
                    onValueChange={handleAnswer}
                    className="space-y-4"
                  >
                    {questions[currentStep].options.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                        />
                        <Label
                          htmlFor={option.value}
                          className="text-base cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                    >
                      <Icon name="ChevronLeft" size={20} className="mr-2" />
                      Назад
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={!answers[questions[currentStep].id]}
                    >
                      {currentStep === questions.length - 1 ? (
                        <>
                          Получить рекомендацию
                          <Icon name="Check" size={20} className="ml-2" />
                        </>
                      ) : (
                        <>
                          Далее
                          <Icon
                            name="ChevronRight"
                            size={20}
                            className="ml-2"
                          />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-8">
                {/* Result */}
                <Card className="p-8">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <Icon
                        name="CheckCircle"
                        size={48}
                        className="text-green-500 mr-4"
                      />
                      <div>
                        <CardTitle className="text-3xl">
                          Ваша рекомендация
                        </CardTitle>
                        <CardDescription>
                          На основе ваших ответов
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          {getRecommendation().config}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-4">
                          {getRecommendation().description}
                        </p>
                        <div className="flex items-center mb-4">
                          <Badge className="bg-primary text-primary-foreground">
                            {getRecommendation().price}
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">
                          Основные возможности:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {getRecommendation().features.map(
                            (feature, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <Icon
                                  name="Check"
                                  size={16}
                                  className="text-green-500"
                                />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild>
                          <Link to="/contact">
                            <Icon name="Phone" size={20} className="mr-2" />
                            Получить консультацию
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" onClick={resetQuiz}>
                          <Icon name="RotateCcw" size={20} className="mr-2" />
                          Пройти тест заново
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Info */}
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon
                        name="Info"
                        size={24}
                        className="mr-2 text-blue-500"
                      />
                      Что дальше?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="MessageCircle"
                          size={20}
                          className="text-primary mt-1"
                        />
                        <div>
                          <h4 className="font-semibold">
                            Бесплатная консультация
                          </h4>
                          <p className="text-muted-foreground">
                            Обсудим детали вашего бизнеса и уточним выбор
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="FileText"
                          size={20}
                          className="text-primary mt-1"
                        />
                        <div>
                          <h4 className="font-semibold">
                            Коммерческое предложение
                          </h4>
                          <p className="text-muted-foreground">
                            Подготовим детальный план внедрения и смету
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="Rocket"
                          size={20}
                          className="text-primary mt-1"
                        />
                        <div>
                          <h4 className="font-semibold">Быстрый старт</h4>
                          <p className="text-muted-foreground">
                            Запуск системы за 2-4 недели
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* All Configurations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Все конфигурации 1С</h2>
            <p className="text-xl text-muted-foreground">
              Краткий обзор популярных решений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon name="User" size={32} className="text-green-500 mb-2" />
                <CardTitle>1С:УНФ</CardTitle>
                <CardDescription>
                  Управление нашей фирмой - для малого бизнеса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>• Простая торговля</p>
                  <p>• Базовый учёт</p>
                  <p>• Отчётность</p>
                  <p>• До 5 пользователей</p>
                </div>
                <div className="mt-4">
                  <Badge className="bg-green-100 text-green-800">
                    от 15 000 руб.
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon
                  name="Calculator"
                  size={32}
                  className="text-blue-500 mb-2"
                />
                <CardTitle>1С:Бухгалтерия</CardTitle>
                <CardDescription>Полноценное ведение бухучёта</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>• Полный бухучёт</p>
                  <p>• Налоговая отчётность</p>
                  <p>• Кадровый учёт</p>
                  <p>• Управление финансами</p>
                </div>
                <div className="mt-4">
                  <Badge className="bg-blue-100 text-blue-800">
                    от 25 000 руб.
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Icon
                  name="ShoppingCart"
                  size={32}
                  className="text-purple-500 mb-2"
                />
                <CardTitle>1С:Управление торговлей</CardTitle>
                <CardDescription>
                  Комплексная автоматизация торговли
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>• Управление продажами</p>
                  <p>• Складской учёт</p>
                  <p>• CRM-функции</p>
                  <p>• Ценообразование</p>
                </div>
                <div className="mt-4">
                  <Badge className="bg-purple-100 text-purple-800">
                    от 35 000 руб.
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Остались вопросы?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Наши эксперты помогут выбрать оптимальное решение для вашего бизнеса
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
                Проверить текущую систему
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Database;
