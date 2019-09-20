package be.businesstraining.bienetreback.security.repository;

import be.businesstraining.bienetreback.model.security.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {

}
