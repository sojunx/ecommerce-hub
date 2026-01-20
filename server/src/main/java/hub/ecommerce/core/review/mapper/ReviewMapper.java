package hub.ecommerce.core.review.mapper;

import hub.ecommerce.core.review.domain.Review;
import hub.ecommerce.core.review.dto.ReviewDto;
import org.springframework.stereotype.Component;

@Component
public class ReviewMapper {
    public ReviewDto toDto(Review review) {
        return ReviewDto.builder()
                .id(review.getId())
                .title(review.getTitle())
                .comment(review.getComment())
                .rating(review.getRating())
                .customerName(review.getCustomerName())
                .customerEmail(review.getCustomerEmail())
                .createdAt(review.getCreatedAt())
                .build();
    }
}
