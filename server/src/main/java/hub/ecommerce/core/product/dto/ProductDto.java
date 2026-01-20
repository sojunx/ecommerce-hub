package hub.ecommerce.core.product.dto;

import hub.ecommerce.core.product.domain.ProductCategory;
import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class ProductDto {
    private UUID id;
    private String name;
    private String description;
    private String image;
    private ProductCategory category;
    private double price;
    private int stock;
}
