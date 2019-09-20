package be.businesstraining.bienetreback.repository;

import be.businesstraining.bienetreback.domain.Newsletter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface INewsletterRepository extends JpaRepository<Newsletter, String>{
}
