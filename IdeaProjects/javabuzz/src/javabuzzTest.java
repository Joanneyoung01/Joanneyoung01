import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class javabuzzTest {

    @Test
    void javabuzz(){
        javabuzz j  = new javabuzz();
        j.buzzer(15);
        assertEquals(15, "java buzz!");

    }
}