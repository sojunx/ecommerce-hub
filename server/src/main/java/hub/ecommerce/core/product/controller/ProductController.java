package hub.ecommerce.core.product.controller;

import hub.ecommerce.core.product.domain.ProductService;
import hub.ecommerce.core.product.dto.ProductDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProductController {
    private final ProductService service;

    @GetMapping
    ResponseEntity<?> getAllProducts(@RequestParam(name = "category", required = false) String category) {
        List<ProductDto> products;
        if (category == null)
            products = service.getAll();
        else
            products = service.getAllByCategory(category);

        var res = Map.of("success", true, "data", products);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    ResponseEntity<?> getProductById(@PathVariable UUID id) {
        var product = service.getProductById(id);

        var res = Map.of("success", true, "data", product);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
