package be.businesstraining.bienetreback.repository;

import be.businesstraining.bienetreback.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IMessageRepository extends JpaRepository<Message, String>  {
}

