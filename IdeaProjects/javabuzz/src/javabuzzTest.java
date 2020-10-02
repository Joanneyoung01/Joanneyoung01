import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class javabuzzTest {

    @Test
    void javabuzz(){
        javabuzz j  = new javabuzz();
        assertEquals("java buzz!", j.buzzer(15));

    }
}