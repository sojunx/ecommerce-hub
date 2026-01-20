package hub.ecommerce.core.product.domain;

import hub.ecommerce.core.product.dto.ProductDto;

import java.util.List;
import java.util.UUID;

public interface ProductService {
    List<ProductDto> getAll();

    List<ProductDto> getAllByCategory(String category);

    ProductDto getProductById(UUID id);
}
