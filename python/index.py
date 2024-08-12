import math

def calculate_aspect_ratio(width, height):
    gcd = math.gcd(width, height)
    simplified_width = width // gcd
    simplified_height = height // gcd
    return f"{simplified_width}:{simplified_height}"

# 示例
width = 960
height = 630
aspect_ratio = calculate_aspect_ratio(width, height)
print(f"图片比例为: {aspect_ratio}")
