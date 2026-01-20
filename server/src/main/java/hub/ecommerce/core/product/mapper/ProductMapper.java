package hub.ecommerce.core.product.mapper;

import hub.ecommerce.core.product.domain.Product;
import hub.ecommerce.core.product.dto.ProductDto;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {
    public ProductDto toDto(Product product) {
        return ProductDto.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .category(product.getCategory())
                .image(product.getImage())
                .price(product.getPrice())
                .stock(product.getStock())
                .build();

    }
}
