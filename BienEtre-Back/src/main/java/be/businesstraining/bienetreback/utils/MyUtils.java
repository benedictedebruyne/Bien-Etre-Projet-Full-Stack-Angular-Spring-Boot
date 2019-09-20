package be.businesstraining.bienetreback.utils;

import java.util.HashMap;
import java.util.Map;

public class MyUtils {

    public static Map<String, Object> buildJsonResponse(String msg) {

        Map<String, Object> myMap = new HashMap<String, Object>();
        myMap.put("result", msg);
        return myMap;
    }

}
