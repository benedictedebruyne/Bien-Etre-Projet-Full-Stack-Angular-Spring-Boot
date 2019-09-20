package be.businesstraining.bienetreback.repository;


import be.businesstraining.bienetreback.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {

        User findByUsername(String username);

}
