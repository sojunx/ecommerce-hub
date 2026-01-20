package hub.ecommerce.core.review.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
@Builder
public class ReviewStatsDto {
    private double averageRating;
    private int totalReviews;
    private List<Map<String, Integer>> ratingCounts;
}
