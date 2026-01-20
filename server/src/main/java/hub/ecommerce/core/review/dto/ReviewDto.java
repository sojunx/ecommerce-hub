package hub.ecommerce.core.review.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
public class ReviewDto {
    private UUID id;
    private String title;
    private String comment;
    private int rating;
    private String customerName;
    private String customerEmail;
    private LocalDateTime createdAt;
}
