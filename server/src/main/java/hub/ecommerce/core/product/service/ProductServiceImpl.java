package hub.ecommerce.core.product.service;

import hub.ecommerce.core.product.domain.ProductCategory;
import hub.ecommerce.core.product.domain.ProductService;
import hub.ecommerce.core.product.dto.ProductDto;
import hub.ecommerce.core.product.mapper.ProductMapper;
import hub.ecommerce.core.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository repository;
    private final ProductMapper mapper;

    @Override
    public List<ProductDto> getAll() {
        var products = repository.findAll();

        return products.stream().map(mapper::toDto).toList();
    }

    @Override
    public List<ProductDto> getAllByCategory(String category) {
        var products = repository.getAllByCategory(ProductCategory.valueOf(category));

        return products.stream().map(mapper::toDto).toList();
    }

    @Override
    public ProductDto getProductById(UUID id) {
        var result = repository.findById(id);

        return result.map(mapper::toDto).orElseThrow(() -> new RuntimeException("Product not found"));
    }
}
