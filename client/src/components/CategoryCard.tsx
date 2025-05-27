import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import type { Category } from "@shared/schema";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/products?categoryId=${category.id}`}>
      <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
        <CardContent className="p-6 text-center">
          <div className="bg-gray-100 rounded-full p-6 mb-4 group-hover:bg-primary/10 transition-colors">
            <img 
              src={category.imageUrl} 
              alt={category.name}
              className="w-16 h-16 object-cover rounded-full mx-auto"
            />
          </div>
          <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
            {category.name}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
}
