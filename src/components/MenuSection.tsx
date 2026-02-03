import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { menuData, type MenuCategory } from '@/lib/menuData';
import { cn } from '@/lib/utils';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].id);

  const currentCategory = menuData.find(cat => cat.id === activeCategory);

  return (
    <section id="menu" className="taverna-section">
      <div className="taverna-container">
        <div className="text-center mb-12">
          <h2 className="taverna-heading mb-4">Το Μενού μας</h2>
          <p className="taverna-subheading">Αυθεντικές Ελληνικές γεύσεις</p>
        </div>

        {/* Special Dish Banner */}
        <div className="max-w-2xl mx-auto mb-10 p-6 bg-secondary/10 border border-secondary/30 rounded-xl text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">
              Σπεσιαλιτέ
            </span>
          </div>
          <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
            Αρνί λαδόκολλα
          </h3>
          <p className="text-muted-foreground text-sm mb-2">
            Αργά ψημένο με πατάτες στη λαδόκολλα
          </p>
          <span className="text-lg font-semibold text-secondary">€14.50</span>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'menu-tab-active'
                  : 'menu-tab-inactive'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {currentCategory && (
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="grid gap-4">
              {currentCategory.items.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-start justify-between p-4 rounded-lg transition-colors',
                    item.isSpecial 
                      ? 'bg-secondary/10 border border-secondary/30' 
                      : 'hover:bg-muted/50'
                  )}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      {item.isSpecial && (
                        <Sparkles className="h-4 w-4 text-secondary" />
                      )}
                    </div>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span className={cn(
                    'font-semibold ml-4',
                    item.isSpecial ? 'text-secondary' : 'text-foreground'
                  )}>
                    €{item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
