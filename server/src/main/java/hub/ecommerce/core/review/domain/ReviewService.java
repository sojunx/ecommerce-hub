package hub.ecommerce.core.review.domain;

import hub.ecommerce.core.review.dto.ReviewDto;
import hub.ecommerce.core.review.dto.ReviewStatsDto;

import java.util.List;
import java.util.UUID;

public interface ReviewService {
    List<ReviewDto> getAllByProductId(UUID id);

    ReviewStatsDto getReviewStats(UUID id);
}
