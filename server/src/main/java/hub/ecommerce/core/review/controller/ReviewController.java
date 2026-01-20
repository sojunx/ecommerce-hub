package hub.ecommerce.core.review.controller;

import hub.ecommerce.core.review.domain.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ReviewController {
    private final ReviewService service;

    @GetMapping("/{id}")
    ResponseEntity<?> getReviewByProductId(@PathVariable UUID id) {
        var reviews = service.getAllByProductId(id);

        var res = Map.of("success", true, "data", reviews);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/{id}/stats")
    ResponseEntity<?> getReviewStats(@PathVariable UUID id) {
        var stats = service.getReviewStats(id);

        var res = Map.of("success", true, "data", stats);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
