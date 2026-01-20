package hub.ecommerce.core.review.service;

import hub.ecommerce.core.review.domain.Review;
import hub.ecommerce.core.review.domain.ReviewService;
import hub.ecommerce.core.review.dto.ReviewDto;
import hub.ecommerce.core.review.dto.ReviewStatsDto;
import hub.ecommerce.core.review.mapper.ReviewMapper;
import hub.ecommerce.core.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository repository;
    private final ReviewMapper mapper;

    @Override
    public List<ReviewDto> getAllByProductId(UUID id) {
        var reviews = repository.getAllByProductId(id);

        return reviews.stream().map(mapper::toDto).toList();
    }

    @Override
    public ReviewStatsDto getReviewStats(UUID id) {
        var reviews = repository.getAllByProductId(id);
        if (reviews.isEmpty())
            return ReviewStatsDto.builder()
                    .averageRating(0.0)
                    .totalReviews(0)
                    .ratingCounts(List.of())
                    .build();

        double averageRating = reviews.stream()
                .mapToInt(Review::getRating)
                .average()
                .orElse(0.0);

        Map<Integer, Long> ratingCountsMap = reviews.stream()
                .collect(Collectors.groupingBy(
                        Review::getRating,
                        Collectors.counting()
                ));

        List<Map<String, Integer>> ratingCounts = ratingCountsMap.entrySet().stream()
                .map(entry -> Map.of(
                        "star", entry.getKey(),
                        "count", entry.getValue().intValue()
                ))
                .toList();

        return ReviewStatsDto.builder()
                .averageRating(Math.round(averageRating * 100.0) / 100.0)
                .totalReviews(reviews.size())
                .ratingCounts(ratingCounts)
                .build();
    }
}
