require 'uglifier'

namespace :assets do

  task :minify do
    options = {
      :mangle          => true, # Mangle variable and function names, use :variables to skip function mangling
      :toplevel        => true, # Mangle top-level variable names
      :except          => [], # Variable names to be excluded from mangling
      :max_line_length => 1000, # Maximum line length
      :squeeze         => true, # Squeeze code resulting in smaller, but less-readable code
      :seqs            => true, # Reduce consecutive statements in blocks into single statement
      :dead_code       => true, # Remove dead code (e.g. after return)
      :lift_vars       => false, # Lift all var declarations at the start of the scope
      :unsafe          => false, # Optimizations known to be unsafe in some situations
      :copyright       => false, # Show copyright message
      :ascii_only      => false, # Encode non-ASCII characters as Unicode code points
      :inline_script   => false, # Escape </script
      :quote_keys      => false, # Quote keys in object literals
      :define          => {}, # Define values for symbol replacement
      :beautify        => false, # Ouput indented code
      :beautify_options => {
        :indent_level => 4,
        :indent_start => 0,
        :space_colon  => false
      }
    }

    # files must me compressed in this order
    input = 
      File.read("lib/base.js") + 
      File.read("lib/object_ext.js") + 
      File.read("lib/string_ext.js") +
      File.read("lib/date_ext.js")

    output = Uglifier.compile input, options
    output = "/*\n#{File.read('LICENSE.txt')}".split("\n\n")[0] + "\n*/\n" + output # add the copywrite stuff...

    file = File.open "lib/lil_p.min.js", "w"
    file.write output
    puts "successfully minifed to lib/lil_p.min.js (#{file.size/1024}k)"
  end

end
