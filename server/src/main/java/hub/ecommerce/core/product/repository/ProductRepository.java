package hub.ecommerce.core.product.repository;

import hub.ecommerce.core.product.domain.Product;
import hub.ecommerce.core.product.domain.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID> {
    List<Product> getAllByCategory(ProductCategory category);
}
