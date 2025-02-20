import { cn } from "@/lib/utils";
import { Star, StarHalf, StarOff } from "lucide-react";

interface StarRatingProps {
  rating: number; // Between 0 and 5
  count?: number; // Number of reviews
  size?: number;
  className?: string
}

const StarRating: React.FC<StarRatingProps> = ({ rating, count,size=16, className }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-1 text-yellow-400 text-sm", className)}>
      {/* Full Stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <Star key={i} size={size} className="fill-current" />
        ))}

      {/* Half Star */}
      {hasHalfStar && <StarHalf size={size}  className="fill-current" />}

      {/* Empty Stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <StarOff key={i} size={size} className="text-gray-300" />
        ))}

      {/* Review Count */}
      {count !== undefined && (
        <span className="text-[length:inherit] text-gray-700">({count})</span>
      )}
    </div>
  );
};

export default StarRating;
