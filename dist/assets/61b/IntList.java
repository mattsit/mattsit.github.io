public class IntList {
    private int value;
    private IntList tail;

    public IntList(int value, IntList tail) {
        this.value = value;
        this.tail = tail;
    }

    public static IntList list(int... nums) {
        IntList result = null;
        for (int i = nums.length-1; i >= 0; i--) {
            result = new IntList(nums[i], result);
        }
        return result;
    }

    public String toString() {
        String result = "";
        IntList curr = this;
        while (curr != null) {
            result += curr.value + " ";
            curr = curr.tail;
        }
        return result;
    }

    public static IntList reverseNondestructive(IntList L) {
        return null;
    }

    public static IntList reverseDestructive(IntList L) {
        return null;
    }

    public static IntList insert(IntList L, int item, int position) {
        return null;
    }

    public static IntList shiftListDestructive(IntList L) {
        return null;
    }
}
