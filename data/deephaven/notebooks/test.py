from deephaven import empty_table
from deephaven.jcompat import j_hashmap
t = empty_table(5).update("X=i").j_table.withAttributes(j_hashmap({"PluginName" : "table-example"}))