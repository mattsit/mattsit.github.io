import org.junit.Test;

import static org.junit.Assert.*;

public class IntListTest {

    @Test
    public void nonDestructiveReverseTest() {
        IntList L = IntList.list(1, 2, 3, 4, 5);
        assertEquals(IntList.reverseNondestructive(L).toString(), "5 4 3 2 1 ");
        assertEquals(L.toString(), "1 2 3 4 5 ");
    }

    @Test
    public void destructiveReverseTest() {
        IntList L = IntList.list(1, 2, 3, 4, 5);
        assertEquals(IntList.reverseDestructive(L).toString(), "5 4 3 2 1 ");
        assertNotEquals(L.toString(), "1 2 3 4 5 ");
    }

    @Test
    public void insertionTest() {
        IntList L = IntList.list(1, 2, 4);
        assertEquals(IntList.insert(L, 3, 2).toString(), "1 2 3 4 ");
        assertEquals(IntList.insert(L, 0, 0).toString(), "0 1 2 3 4 ");
    }

    @Test
    public void shiftListDestructiveTest() {
        IntList L = IntList.list(5, 4, 9, 1, 2, 3);
        assertEquals(IntList.shiftListDestructive(L).toString(), "4 9 1 2 3 5 ");
    }

}