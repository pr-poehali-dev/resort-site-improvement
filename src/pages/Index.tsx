import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const rooms = [
    {
      title: 'Стандарт',
      description: 'Уютный номер для двоих',
      capacity: '2 человека',
      amenities: ['Двуспальная кровать', 'Телевизор', 'Wi-Fi', 'Санузел'],
      price: 'от 3 500 ₽/сутки'
    },
    {
      title: 'Семейный',
      description: 'Просторный номер для всей семьи',
      capacity: '4 человека',
      amenities: ['2 двуспальные кровати', 'Телевизор', 'Wi-Fi', 'Санузел', 'Холодильник'],
      price: 'от 5 500 ₽/сутки'
    },
    {
      title: 'Люкс',
      description: 'Комфортный номер с видом на озеро',
      capacity: '2-3 человека',
      amenities: ['Двуспальная кровать', 'Диван', 'Телевизор', 'Wi-Fi', 'Санузел', 'Холодильник', 'Кондиционер'],
      price: 'от 7 000 ₽/сутки'
    },
    {
      title: 'Коттедж',
      description: 'Отдельный домик с кухней',
      capacity: '6-8 человек',
      amenities: ['3 спальни', 'Гостиная', 'Кухня', 'Санузел', 'Терраса', 'Мангал'],
      price: 'от 12 000 ₽/сутки'
    }
  ];

  const services = [
    {
      icon: 'Fish',
      title: 'Рыбалка',
      description: 'Озеро с богатым разнообразием рыбы. Аренда снастей и лодок.'
    },
    {
      icon: 'Flame',
      title: 'Баня',
      description: 'Русская баня на дровах с комнатой отдыха и бассейном.'
    },
    {
      icon: 'UtensilsCrossed',
      title: 'Мангальные зоны',
      description: 'Оборудованные места для приготовления шашлыков и барбекю.'
    },
    {
      icon: 'Trophy',
      title: 'Спортивные площадки',
      description: 'Волейбол, футбол, бадминтон. Спортивный инвентарь в прокате.'
    },
    {
      icon: 'Bike',
      title: 'Прокат',
      description: 'Велосипеды, катамараны, лодки, мячи и другой инвентарь.'
    },
    {
      icon: 'Trees',
      title: 'Экотропы',
      description: 'Прогулочные тропы по живописным местам вокруг базы.'
    }
  ];

  const reviews = [
    {
      name: 'Анна и Сергей',
      date: 'Август 2024',
      text: 'Прекрасное место для семейного отдыха! Дети в восторге от природы, рыбалка отличная. Обязательно приедем еще!',
      rating: 5
    },
    {
      name: 'Михаил',
      date: 'Июль 2024',
      text: 'Отдыхали компанией. Баня супер, мангальная зона удобная. Персонал приветливый. Рекомендую!',
      rating: 5
    },
    {
      name: 'Елена',
      date: 'Июнь 2024',
      text: 'Очень чистые номера, вкусные завтраки. Территория ухоженная. Спасибо за отличный отдых!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Trees" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ОнегаПарк</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('rooms')} className="text-foreground hover:text-primary transition-colors">
                Номера
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('territory')} className="text-foreground hover:text-primary transition-colors">
                Территория
              </button>
              <button onClick={() => scrollToSection('prices')} className="text-foreground hover:text-primary transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">
                Галерея
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              База отдыха ОнегаПарк
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Отдых на природе в окружении озер и лесов
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Icon name="MapPin" className="text-primary" size={20} />
                <span>Онежское озеро</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Icon name="Phone" className="text-primary" size={20} />
                <span>+7 (123) 456-78-90</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Icon name="Clock" className="text-primary" size={20} />
                <span>Круглый год</span>
              </div>
            </div>
            <Button size="lg" onClick={() => scrollToSection('prices')} className="text-lg px-8">
              Забронировать
            </Button>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Номера и размещение</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <CardTitle>{room.title}</CardTitle>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Icon name="Users" size={18} />
                      <span className="text-sm">{room.capacity}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-lg font-semibold text-primary">{room.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Услуги и развлечения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={service.icon as any} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="territory" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Территория и инфраструктура</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Home" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Комфортное размещение</h3>
                    <p className="text-muted-foreground">Уютные номера и коттеджи с современными удобствами</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="TreePine" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Лесная зона</h3>
                    <p className="text-muted-foreground">15 гектаров соснового леса с чистым воздухом</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Waves" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Собственный пляж</h3>
                    <p className="text-muted-foreground">Оборудованная зона для купания и отдыха у воды</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Car" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Парковка</h3>
                    <p className="text-muted-foreground">Бесплатная охраняемая парковка для гостей</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Wifi" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Wi-Fi на территории</h3>
                    <p className="text-muted-foreground">Бесплатный беспроводной интернет</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="ShoppingBasket" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Кафе</h3>
                    <p className="text-muted-foreground">Домашняя кухня с местными продуктами</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Цены и бронирование</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Забронировать номер</CardTitle>
                <CardDescription>Оставьте заявку, и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Дата заезда</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Дата выезда</label>
                      <Input type="date" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Количество гостей</label>
                    <Input type="number" min="1" placeholder="2" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea placeholder="Дополнительные пожелания..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Фотогалерея</h2>
          <Tabs defaultValue="rooms" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="rooms">Номера</TabsTrigger>
              <TabsTrigger value="territory">Территория</TabsTrigger>
              <TabsTrigger value="activities">Активности</TabsTrigger>
              <TabsTrigger value="nature">Природа</TabsTrigger>
            </TabsList>
            <TabsContent value="rooms" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-video bg-gradient-to-br from-primary/20 to-accent/30 rounded-lg flex items-center justify-center">
                    <Icon name="Image" className="text-primary/40" size={48} />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="territory" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-video bg-gradient-to-br from-accent/30 to-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Image" className="text-primary/40" size={48} />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="activities" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/30 rounded-lg flex items-center justify-center">
                    <Icon name="Image" className="text-primary/40" size={48} />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="nature" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-video bg-gradient-to-br from-accent/40 to-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Image" className="text-primary/40" size={48} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Отзывы гостей</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {Array(review.rating).fill(0).map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Контакты и как добраться</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Адрес:</p>
                      <p className="text-muted-foreground">Республика Карелия, п. Онега, ул. Озерная, 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Телефон:</p>
                      <p className="text-muted-foreground">+7 (123) 456-78-90</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Email:</p>
                      <p className="text-muted-foreground">info@onegapark.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Как добраться</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="car">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Icon name="Car" size={20} />
                          <span>На автомобиле</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        Из Петрозаводска по трассе М18 в сторону Архангельска, затем поворот на п. Онега. Расстояние 220 км, время в пути около 3 часов.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="train">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Icon name="Train" size={20} />
                          <span>На поезде</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        Ближайшая ж/д станция в г. Петрозаводск. От вокзала организован трансфер до базы отдыха (требуется предварительная договоренность).
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="plane">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Icon name="Plane" size={20} />
                          <span>На самолете</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        Ближайший аэропорт в г. Петрозаводск. От аэропорта можно добраться на такси или заказать трансфер.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Trees" size={32} />
            <span className="text-2xl font-bold">ОнегаПарк</span>
          </div>
          <p className="mb-4">База отдыха на Онежском озере</p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Phone" size={24} />
            </a>
          </div>
          <p className="text-sm text-primary-foreground/80">© 2024 ОнегаПарк. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
